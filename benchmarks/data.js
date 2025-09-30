window.BENCHMARK_DATA = {
  "lastUpdate": 1759216380423,
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
      },
      {
        "commit": {
          "author": {
            "email": "67517699+ilitteri@users.noreply.github.com",
            "name": "Ivan Litteri",
            "username": "ilitteri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02baa16307c9505acf1fdeaa8eb6978181f2980f",
          "message": "feat(replay): add `--cache-level` flag in `ethrex-replay` to decide whether to write the cache or not (#4402)\n\n**Motivation**\n\nThis feature was already implemented in the `ethrex-replayer` but was\nnot available for `ethrex-replay`. As `ethrex-replayer` already makes\nuse of `ethrex-replay` as a library, it is almost free to add this\nfeature to `ethrex-replay` while keeping it in `ethrex-replayer`.\n\n**Description**\n\n- Rename `CacheLevel::All` to `CacheLevel::On` due to the change in the\ncontext in which it is now used.\n- Implements `--cache-level` arg of type `CacheLevel` with 3 variants:\n`on` to cache block replays, `failed` to cache only failed replays, and\n`off` to avoid caching.\n- Refactors cache API\n    - `write_cache` now derives the file name from the cache.\n- Cache file name generation is now centralized in a single function to\nreduce error surface.",
          "timestamp": "2025-09-16T21:41:26Z",
          "tree_id": "6765e683c95734462fd165e94715b074ce6e2818",
          "url": "https://github.com/FredPhilipy/ethrex/commit/02baa16307c9505acf1fdeaa8eb6978181f2980f"
        },
        "date": 1758086243225,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 169937934649,
            "range": "± 365338035",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "02330e2a0f36ceab463a7756d596d826070d1309",
          "message": "docs(l1): document rlpx messages (#4560)\n\n**Motivation**\nThe difference between `PeerMessage` and `BackendMessage` is not clear\n<!-- Why does this pull request exist? What are its goals? -->\n\n**Description**\nDocument its differences\n<!-- A clear and concise general description of the changes this PR\nintroduces -->\n\n<!-- Link to issues: Resolves #111, Resolves #222 -->\n\nCloses https://github.com/lambdaclass/ethrex/issues/4271",
          "timestamp": "2025-09-18T16:17:19Z",
          "tree_id": "a6b2a07d122eeea9b4eae20163210fdb1ab19f7c",
          "url": "https://github.com/FredPhilipy/ethrex/commit/02330e2a0f36ceab463a7756d596d826070d1309"
        },
        "date": 1758217170046,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 168018309296,
            "range": "± 348934334",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás Grüner",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38e0ffc4487548a7b89de02b8b2b13c791a84682",
          "message": "refactor(l1): use `Path` instead of `String` for `--datadir` (#4543)\n\n**Motivation**\n\nWe are currently using `String` when dealing with file paths. This\npushes error-handling later into the node's lifecycle, which could delay\nsome errors.\n\n**Description**\n\nThis PR changes the CLI flag `--datadir` to receive a `PathBuf`, and\nalso changes all uses of the flag to receive a `&Path` or similar type.",
          "timestamp": "2025-09-19T19:01:16Z",
          "tree_id": "6272d7a8c23a1c2e94bfc90322a5e634d70b1577",
          "url": "https://github.com/FredPhilipy/ethrex/commit/38e0ffc4487548a7b89de02b8b2b13c791a84682"
        },
        "date": 1758460766953,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 89377171444,
            "range": "± 279110543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigooliveri10@gmail.com",
            "name": "Rodrigo Oliveri",
            "username": "rodrigo-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "448cab70ba986af5377347c61f434447b9de7b0c",
          "message": "chore(l1): reduce range of account request to reduce memory overhead (#4584)\n\n**Motivation**\n\nReduce memory usage by reducing the chunks\n\n**Description**\n\nIt just reduce the calculation for file size to 128MB instead of 512MB",
          "timestamp": "2025-09-23T20:08:09Z",
          "tree_id": "6c9cbf7c3400bb2b597ad8a9e35b638f97146b7d",
          "url": "https://github.com/FredPhilipy/ethrex/commit/448cab70ba986af5377347c61f434447b9de7b0c"
        },
        "date": 1758705316378,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 90925620049,
            "range": "± 256367692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "francisco.gauna@lambdaclass.com",
            "name": "fedacking",
            "username": "fedacking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c25e90f8a1d9aac64b0124e74f6a20752a0737fe",
          "message": "docs(l2): improve documentation in `contracts.md` (#3797)\n\n**Motivation**\nDocumentation in `contracts.md` contains todos\n\n**Description**\nFills in the `todos` with the latest L1 and L2 contract implementations\n\nrelated to #3165 and #3575\n\nAuthored-by: JasonVranek <jasonvranek@gmail.com>\n\n---------\n\nCo-authored-by: JasonVranek <jasonvranek@gmail.com>\nCo-authored-by: Ivan Litteri <67517699+ilitteri@users.noreply.github.com>\nCo-authored-by: Javier Chatruc <jrchatruc@gmail.com>",
          "timestamp": "2025-09-29T21:21:31Z",
          "tree_id": "6c5c6ae8c64fb140e3393662836ef0460041bbcc",
          "url": "https://github.com/FredPhilipy/ethrex/commit/c25e90f8a1d9aac64b0124e74f6a20752a0737fe"
        },
        "date": 1759216378155,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 90806147603,
            "range": "± 303814389",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}