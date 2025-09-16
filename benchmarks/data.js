window.BENCHMARK_DATA = {
  "lastUpdate": 1758011875553,
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
      },
      {
        "commit": {
          "author": {
            "email": "112426153+tomip01@users.noreply.github.com",
            "name": "Tomás Paradelo",
            "username": "tomip01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da519b6c9c32ca65f51e338971e0014dd90fa535",
          "message": "ci(replay): add job on every pr for zkvm executing (#4441)\n\n**Motivation**\n\nThis pull request updates the CI workflows to support executing L1 block\nreplays with both SP1 and Risc0 backends.\n\n**Description**\n\n* Added a new `test` job in `pr-main_replay.yaml` to execute an L1 block\nwith both `sp1` and `risc0` backends.\n* Added new targets `execute-sp1-ci` and `execute-risc0-ci` to\n`cmd/ethrex_replay/Makefile` for executing blocks with the respective\nbackends in CI.\n\n*\n[Both](https://github.com/lambdaclass/ethrex/actions/runs/17674951506/job/50234765309?pr=4441)\nexecute under 25 minutes\n\nCloses #4436\nCloses #4134\n\n---------\n\nCo-authored-by: Ivan Litteri <67517699+ilitteri@users.noreply.github.com>\nCo-authored-by: ilitteri <ilitteri@fi.uba.ar>",
          "timestamp": "2025-09-15T21:58:29Z",
          "tree_id": "16521e2a2925ecc66a99663f3948c9b46791a92f",
          "url": "https://github.com/FredPhilipy/ethrex/commit/da519b6c9c32ca65f51e338971e0014dd90fa535"
        },
        "date": 1758011873745,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 169146967282,
            "range": "± 418508333",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}