# holbertonschool-continuous_integration

CI/CD learning project — Continuous Integration with GitHub Actions.

## Pipeline

The workflow defined in `.github/workflows/ci.yml` triggers on every `push` to the repository. It checks out the code, sets up Node.js, installs dependencies, and runs ESLint as a first validation step.

✅ [Successful run #1](https://github.com/benji3106/holbertonschool-continuous_integration/actions/runs/32846275012)

## Pull request checks

Tests run automatically on every `pull_request` via the `test` job in `.github/workflows/ci.yml`.

- ✅ Passing PR — checks green: [PR #1](https://github.com/benji3106/holbertonschool-continuous_integration/pull/1)
- ❌ Failing PR — deliberately broken test blocks the merge: [PR #2](https://github.com/benji3106/holbertonschool-continuous_integration/pull/2)