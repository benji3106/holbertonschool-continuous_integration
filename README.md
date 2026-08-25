# holbertonschool-continuous_integration

CI/CD learning project — Continuous Integration with GitHub Actions.

## Pipeline

The workflow defined in `.github/workflows/ci.yml` triggers on every `push` to the repository. It checks out the code, sets up Node.js, installs dependencies, and runs ESLint as a first validation step.

✅ [Successful run #1](https://github.com/benji3106/holbertonschool-continuous_integration/actions/runs/32846275012)