#!/usr/bin/env python3
"""Local demo server for Sapropel / Eco Organica preview.

Routes:
  /                        → preview.html
  /articles/               → preview-articles.html
  /articles/<slug>/        → preview-article.html
  Everything else          → static file from this directory
"""

import http.server
import os
import sys
import webbrowser
from pathlib import Path

PORT = 8080
ROOT = Path(__file__).parent


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = self.path.split("?")[0].split("#")[0]

        if path == "/" or path == "/index.html":
            self.serve_file("preview.html")
        elif path in ("/articles/", "/articles"):
            self.serve_file("preview-articles.html")
        elif path.startswith("/articles/") and path != "/articles/":
            self.serve_file("preview-article.html")
        else:
            super().do_GET()

    def serve_file(self, filename):
        file_path = ROOT / filename
        if not file_path.exists():
            self.send_error(404, f"File not found: {filename}")
            return
        text = file_path.read_text(encoding="utf-8")
        # Inject <base href="/"> so relative fetch/CSS/JS paths resolve from root,
        # not from the virtual URL (e.g. /articles/slug/).
        if "<base " not in text:
            text = text.replace("<head>", '<head>\n  <base href="/">', 1)
        content = text.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(content)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(content)

    def log_message(self, fmt, *args):
        print(f"  {self.address_string()} {fmt % args}")


if __name__ == "__main__":
    os.chdir(ROOT)
    url = f"http://localhost:{PORT}"
    print(f"\n  Сервер запущен: {url}")
    print(f"  Главная:        {url}/")
    print(f"  Статьи:         {url}/articles/")
    print(f"  Статья:         {url}/articles/sapropel-sostav-i-svoistva/")
    print(f"\n  Остановить: Ctrl+C\n")
    webbrowser.open(url)
    with http.server.HTTPServer(("", PORT), Handler) as srv:
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            print("\n  Сервер остановлен.")
            sys.exit(0)
