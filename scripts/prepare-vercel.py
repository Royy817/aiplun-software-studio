"""Prepare deployment files and reject missing local image assets."""
import base64
import json
import re
import subprocess
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
tracked = subprocess.check_output(
    ['git', 'ls-files', '-z'], cwd=root
).decode().split('\0')
folders = {'app', 'components', 'lib', 'public', 'recovered'}
configs = {'package.json', 'package-lock.json', 'next.config.mjs', 'jsconfig.json', 'eslint.config.mjs'}
paths = [p for p in tracked if p and (p.split('/')[0] in folders or p in configs)]
# The homepage is rendered by app/page.js; this HTML is an unused archive.
paths = [p for p in paths if p != 'recovered/home.html']
assets = {p.removeprefix('public/') for p in paths if p.startswith('public/')}
for name in paths:
    if Path(name).suffix not in {'.js', '.html', '.css'}:
        continue
    source = (root / name).read_text()
    for asset in re.findall(r'[\"\'\(]/([^\"\'\s\)?]+\.(?:jpg|jpeg|png|webp|svg|ico))', source):
        if asset not in assets:
            raise SystemExit(f'Missing deployment asset: {asset} referenced by {name}')
files = [dict(file=p, data=base64.b64encode((root / p).read_bytes()).decode(),
              encoding='base64') for p in paths]
Path(sys.argv[1]).write_text(json.dumps(files))
print(f'Prepared {len(files)} files; all local image references are included.')
