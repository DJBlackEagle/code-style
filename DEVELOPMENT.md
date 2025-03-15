# Development Guidelines <!-- omit in toc -->

This document provides in-depth information on the internal processes for developing,
building, testing, and maintaining the project. It is intended for developers and
contributors who want to understand how the project works behind the scenes.

## Table of Contents <!-- omit in toc -->

- [Workflow Configuration](#workflow-configuration)
  - [Issue and Pull Request Cleanup](#issue-and-pull-request-cleanup)
  - [Label Synchronization](#label-synchronization)
- [Additional Resources](#additional-resources)

## Workflow Configuration

Our Continuous Integration (CI) pipeline is configured to ensure that the project
maintains high quality through automated testing, linting, formatting, and
security scans.

### Issue and Pull Request Cleanup

The project uses an automated stale issue and pull request cleanup workflow to
ensure that inactive issues and PRs do not clutter the repository.

- Issues become stale after **30 days** of inactivity and are labeled as `stale`.
- Stale issues are closed automatically after **7 days** if no activity occurs.
- Pull requests become stale after **30 days** and are closed after **10 days**
  if no further action is taken.
- Issues and PRs with specific labels (e.g., `no-stale`, `help-wanted`) are
  exempt from this process.

This automation helps keep the repository manageable and ensures that active
discussions are prioritized.

### Label Synchronization

The project uses an automated workflow to ensure consistent issue and pull
request labels. This synchronization process helps maintain structured issue
management and simplifies repository maintenance.

- The workflow runs when changes are pushed to the **main** branch that modify
  the `.github/labels.yml` file.
- Labels defined in `.github/labels.yml` are automatically synchronized across
  the repository.
- Synchronization can also be triggered manually using **workflow dispatch**.
- Ensures a standardized and structured issue labeling system.
- Prevents label inconsistencies when working with multiple contributors.
- Reduces manual label management effort.

By automating label synchronization, the project maintains consistency and
reduces manual work, making issue tracking more efficient.

## Additional Resources

- [README.md][REF_INTERN_FILE_MD_README] – For an overview of the project and
  end-user documentation.
- [Contributing Guidelines][REF_INTERN_FILE_MD_CONTRIBUTING] for more information
  on how to get started.

This `development.md` serves as a guide for developers and contributors. It is
recommended to keep this document updated as the project evolves and new scripts
or CI configurations are introduced.

[REF_INTERN_EMAIL_ADDRESS_COD]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_EMAIL_ADDRESS_OWNER]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_EMAIL_ADDRESS_SECURITY]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_FILE_MD_CHANGELOG]: CHANGELOG.md
[REF_INTERN_FILE_MD_CODE_OF_CONDUCT]: CODE_OF_CONDUCT.md
[REF_INTERN_FILE_MD_CONTRIBUTING]: CONTRIBUTING.md
[REF_INTERN_FILE_MD_DEVELOPMENT]: DEVELOPMENT.md
[REF_INTERN_FILE_MD_LICENSE]: LICENSE.md
[REF_INTERN_FILE_MD_README]: README.md
[REF_INTERN_FILE_MD_SECURITY]: SECURITY.md
[REF_INTERN_URL_ACTIONS]: https://github.com/DJBlackEagle/code-style/actions/
[REF_INTERN_URL_CODESTYLE]: https://github.com/DJBlackEagle/code-style/
[REF_INTERN_URL_COMMITS]: https://github.com/DJBlackEagle/code-style/commits/main/
[REF_INTERN_URL_COMMIT_MESSAGE_FORMAT]: <https://www.conventionalcommits.org/en/v1.0.0/>
[REF_INTERN_URL_CONTRIBUTING_GENERATOR]: <https://contributing.md/generator>
[REF_INTERN_URL_GIT]: https://github.com/DJBlackEagle/code-style
[REF_INTERN_URL_ISSUE_LIST]: https://github.com/DJBlackEagle/code-style/issues
[REF_INTERN_URL_ISSUE_NEW]: https://github.com/DJBlackEagle/code-style/issues/new/choose
[REF_INTERN_URL_MD_CHANGELOG]: https://github.com/DJBlackEagle/code-style/blob/main/CHANGELOG.md
[REF_INTERN_URL_MD_CODE_OF_CONDUCT]: https://github.com/DJBlackEagle/code-style/blob/main/CODE_OF_CONDUCT.md
[REF_INTERN_URL_MD_CONTRIBUTING]: https://github.com/DJBlackEagle/code-style/blob/main/CONTRIBUTING.md
[REF_INTERN_URL_MD_DEVELOPMENT]: https://github.com/DJBlackEagle/code-style/blob/main/DEVELOPMENT.md
[REF_INTERN_URL_MD_LICENSE]: https://github.com/DJBlackEagle/code-style/blob/main/LICENSE.md
[REF_INTERN_URL_MD_README]: https://github.com/DJBlackEagle/code-style/blob/main/README.md
[REF_INTERN_URL_MD_SECURITY]: https://github.com/DJBlackEagle/code-style/blob/main/SECURITY.md
[REF_INTERN_URL_NPMJS_PACKAGE]: https://www.npmjs.com/package/@djblackeagle/code-style
[REF_INTERN_URL_PULLREQUEST]: https://github.com/DJBlackEagle/code-style/pulls
[REF_INTERN_URL_VULNERABILITY]: https://github.com/DJBlackEagle/code-style/security
[REF_INTERN_URL_VULNERABILITY_NEW]: https://github.com/DJBlackEagle/code-style/security/advisories/new
[REF_INTERN_URL_WORKFLOW_CQAT]: https://github.com/DJBlackEagle/code-style/actions/workflows/code-quality-and-tests.yml
[REF_INTERN_URL_WORKFLOW_CODEQL]: https://github.com/DJBlackEagle/code-style/actions/workflows/codeql.yml
