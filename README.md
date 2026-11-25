[![make.fun](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/tunnelmoon/u-coral-404-one-line-big-laugh-328fb857/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/tunnelmoon/u-coral-404-one-line-big-laugh-328fb857/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

# One Line, Big Laugh

Entry for the make.fun bounty [One Line, Big Laugh](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857): a single hilarious line of at most 200 characters.

> My smartwatch congratulated me on burning 400 calories. I was just looking for the remote.

## How it works

`main.ts` (Node 22, stdlib only) holds the line as a string constant, validates the gate (1 to 200 characters, a single line, not only whitespace), writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, then reads the file back and checks it matches the line exactly.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
