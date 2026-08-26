# holbertonschool-continuous_integration

CI/CD learning project - Continuous Integration with GitHub Actions.

## 0-Pipeline

The workflow defined in `.github/workflows/ci.yml` triggers on every `push` to the repository. It checks out the code, sets up Node.js, installs dependencies, and runs ESLint as a first validation step.

✅ [Successful run #1](https://github.com/benji3106/holbertonschool-continuous_integration/actions/runs/32846275012)

## 1-Pull request checks

Tests run automatically on every `pull_request` via the `test` job in `.github/workflows/ci.yml`.

- ✅ Passing PR : checks green: [PR #1](https://github.com/benji3106/holbertonschool-continuous_integration/pull/1)
- ❌ Failing PR : deliberately broken test blocks the merge: [PR #2](https://github.com/benji3106/holbertonschool-continuous_integration/pull/2)

## 2-Matrix testing

The `test` job runs across Node.js versions 20, 22, and 24 in parallel using a matrix strategy.

✅ [Matrix run — all 3 versions passing](https://github.com/benji3106/holbertonschool-continuous_integration/actions/runs/32942286666)

## 3-Dependency caching

Added `cache: 'npm'` to `actions/setup-node` in both jobs, and switched from `npm install` to `npm ci` for reproducible installs compatible with caching.

- **Before caching** (cache miss, first run): `Install dependencies` took **3s** : [run #14](https://github.com/benji3106/holbertonschool-continuous_integration/actions/runs/32944201252)
- **After caching** (cache hit, second run): `Install dependencies` took **1s** : [run #15](https://github.com/benji3106/holbertonschool-continuous_integration/actions/runs/32944555029)
