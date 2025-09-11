window.BENCHMARK_DATA = {
  "lastUpdate": 1757609551824,
  "repoUrl": "https://github.com/FredPhilipy/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "39842759+gianbelinche@users.noreply.github.com",
            "name": "Gianbelinche",
            "username": "gianbelinche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bb360a915d908d8efd5e5f7a978dd09197f5602",
          "message": "fix(l1): avoid sending a transaction to a peer that already knows it (#4363)\n\n**Motivation**\nThe TxBroadcaster does not follow the spec, since it can send a tx to a\npeer that already knows of it\n<!-- Why does this pull request exist? What are its goals? -->\n\n**Description**\nAdds a HashMap stating which transactions each peer knows, and avoiding\nsending a tx if a peer already knows it.\nAfter some time, this HashMap is pruned.\n<!-- A clear and concise general description of the changes this PR\nintroduces -->\n\n<!-- Link to issues: Resolves #111, Resolves #222 -->\n\nCloses https://github.com/lambdaclass/ethrex/issues/4356",
          "timestamp": "2025-09-11T13:30:11Z",
          "tree_id": "33e474ad67513989bb9fb478eb69430e7aeef247",
          "url": "https://github.com/FredPhilipy/ethrex/commit/0bb360a915d908d8efd5e5f7a978dd09197f5602"
        },
        "date": 1757609549208,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 169027892997,
            "range": "± 948204818",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}