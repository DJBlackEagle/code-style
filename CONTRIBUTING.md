# Contributing to @djblackeagle/code-style <!-- omit in toc -->

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the 'Table of Contents'
for different ways to help and details about how this project handles them.
Please make sure to read the relevant section before making your contribution.
It will make it a lot easier for us maintainers and smooth out the experience
for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine.
> There are other easy ways to support the project and show your appreciation,
> which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Table of Contents <!-- omit in toc -->

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Improving The Documentation](#improving-the-documentation)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)
- [Additional Resources](#additional-resources)

## Code of Conduct

This project and everyone participating in it is governed by the
[Code of Conduct][REF_INTERN_FILE_MD_CODE_OF_CONDUCT].

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation][REF_INTERN_FILE_MD_README].

Before you ask a question, it is best to search for existing [Issues][REF_INTERN_URL_ISSUE_LIST]
that might help you. In case you have found a suitable issue and still need
clarification, you can write your question in this issue. It is also advisable
to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we
recommend the following:

- Open an [Issue][REF_INTERN_URL_ISSUE_NEW].
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what
  seems relevant.

We will then take care of the issue as soon as possible.

<!--
You might want to create a separate issue tag for questions and include it in
this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning,
e.g. to Stack Overflow or Gitter. You may add additional contact and
information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100%
> of the content, that you have the necessary rights to the content and that
> the content you contribute may be provided under the project licence.

### Reporting Bugs

#### Before Submitting a Bug Report <!-- omit in toc -->

A good bug report shouldn't leave others needing to chase you up for more information.
Therefore, we ask you to investigate carefully, collect information and describe
the issue in detail in your report. Please complete the following steps in
advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using
  incompatible environment components/versions (Make sure that you have read
  the [documentation][REF_INTERN_FILE_MD_README]. If you are looking for support,
  you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the
  same issue you are having, check if there is not already a bug report existing
  for your bug or error in the [bug tracker][REF_INTERN_URL_ISSUE_NEW].
- Also make sure to search the internet (including Stack Overflow) to see if
  users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of the interpreter, compiler, SDK, runtime environment,
    package manager, depending on what seems relevant.
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it
    with older versions?

#### How Do I Submit a Good Bug Report? <!-- omit in toc -->

> You must never report security related issues, vulnerabilities or bugs including
> sensitive information to the issue tracker, or elsewhere in public. Instead
> sensitive bugs must be sent by email to [DJ BlackEagle][REF_INTERN_EMAIL_ADDRESS_SECURITY].

<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with
the project:

- Open an [Issue][REF_INTERN_URL_ISSUE_NEW]. (Since we can't be sure at this
  point whether it is a bug or not, we ask you not to talk about a bug yet and
  not to label the issue.)
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the _reproduction steps_
  that someone else can follow to recreate the issue on their own. This usually
  includes your code. For good bug reports you should isolate the problem and
  create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps.
  If there are no reproduction steps or no obvious way to reproduce the issue,
  the team will ask you for those steps and mark the issue as `needs-repro`.
  Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`,
  as well as possibly other tags (such as `critical`), and the issue will be
  left to be [implemented by someone](#your-first-code-contribution).

<!-- You might want to create an issue template for bugs and errors that can be
     used as a guide and that defines the structure of the information to be included.
     If you do so, reference it here in the description. -->

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for
@djblackeagle/code-style, **including completely new features and minor
improvements to existing functionality**. Following these guidelines will
help maintainers and the community to understand your suggestion and find
related suggestions.

#### Before Submitting an Enhancement <!-- omit in toc -->

- Make sure that you are using the latest version.
- Read the [documentation][REF_INTERN_FILE_MD_README] carefully and find out if
  the functionality is already covered, maybe by an individual configuration.
- Perform a [search][REF_INTERN_URL_ISSUE_LIST] to see if the enhancement has
  already been suggested. If it has, add a comment to the existing issue
  instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project.
  It's up to you to make a strong case to convince the project's developers
  of the merits of this feature. Keep in mind that we want features that will
  be useful to the majority of our users and not just a small subset. If you're
  just targeting a minority of users, consider writing an add-on/plugin library.

#### How Do I Submit a Good Enhancement Suggestion? <!-- omit in toc -->

Enhancement suggestions are tracked as [issues][REF_INTERN_URL_ISSUE_LIST].

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many
  details as possible.
- **Describe the current behavior** and **explain which behavior you expected to
  see instead** and why. At this point you can also tell which alternatives do
  not work for you.
- **Explain why this enhancement would be useful** to most @djblackeagle/code-style
  users. You may also want to point out the other projects that solved it better
  and which could serve as inspiration.

<!-- You might want to create an issue template for enhancement suggestions that
     can be used as a guide and that defines the structure of the information to
     be included. If you do so, reference it here in the description. -->

### Your First Code Contribution

<!-- TODO
include Setup of env, IDE and typical getting started instructions?

-->

### Improving The Documentation

<!-- TODO
Updating, improving and correcting the documentation

-->

## Styleguides

### Commit Messages

We follow the commit message policy based on the '[Conventional Commits][REF_INTERN_URL_COMMIT_MESSAGE_FORMAT]'
rules.

We have strict rules for formatting our git commit messages. This ensures
**more readable messages** that are easy to follow when reviewing the project
history. Additionally, we use git commit messages to **automatically generate
the changelog**.

#### Commit Message Format <!-- omit in toc -->

Each commit message consists of a **header**, a **body**, and a **footer**.
The header follows a specific format that includes a **type**, a **scope**,
and a **subject**:

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory, while the **scope** of the header is optional.

No line in the commit message should exceed 100 characters. This ensures better
readability on GitHub and in various Git tools.

Footer should include a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/)
if applicable.

#### Revert <!-- omit in toc -->

If the commit reverts a previous commit, it should begin with `revert:`, followed
by the header of the reverted commit. In the body it should say:
`This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

If the commit reverts a previous commit, it should begin with `revert:`, followed
by the header of the reverted commit. The body should include the line:
`This reverts commit <hash>.`, where `<hash>` is the SHA of the commit being reverted.

#### Type <!-- omit in toc -->

Must be one of the following:

- **build**: Changes affecting the build system or external dependencies
  (e.g., gulp, broccoli, npm).
- **chore**: Task updates without affecting production code.
- **ci**: Changes to CI configuration files and scripts (e.g., Travis, CircleCI,
  BrowserStack, SauceLabs).
- **docs**: Documentation-only changes.
- **feat**: Introducing a new feature.
- **fix**: Resolving a bug.
- **perf**: Code changes that enhance performance.
- **refactor**: Code changes that neither fix bugs nor add features.
- **style**: Changes without altering code functionality (e.g., white-space,
  formatting, missing semicolons).
- **test**: Adding or correcting tests.
- **sample**: Changes to sample code.

#### Scope <!-- omit in toc -->

The scope should match the name of the affected npm package, as it would be
perceived by someone reading the changelog generated from commit messages.

The following is the list of supported scopes:

<!-- - **common**: for changes made on `packages/common` directory -->
<!-- - **core**: for changes made on `packages/core` directory -->
<!-- - **sample**: for changes made on `packages/sample` directory -->
<!-- - **express**: for changes made on `packages/platform-express` directory -->
<!-- - **fastify**: for changes made on `packages/platform-fastify` directory -->
<!-- - **ws**: for changes made on `packages/platform-ws` directory -->
<!-- - **testing**: for changes made on `packages/testing` directory -->
<!-- - **websockets**: for changes made on `packages/websockets` directory -->

If your change affects more than one package, separate the scopes with a
comma (e.g., `common,core`).

#### Subject <!-- omit in toc -->

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change," not "changed" or "changes."
- Do not capitalize the first letter.
- Avoid a period (.) at the end.

#### Body <!-- omit in toc -->

Just as in the **subject**, use the imperative, present tense: "change" not
"changed" or "changes".
The body should include the motivation for the change and contrast this with
previous behavior.

#### Footer <!-- omit in toc -->

The footer should include any information about **Breaking Changes** and is also
the appropriate place to reference GitHub issues that this commit **closes**.

**Breaking Changes** should begin with the word `BREAKING CHANGE:` followed by a
space or two newlines. The remainder of the commit message should then provide
the relevant details.

A detailed explanation can be found in this [document][REF_INTERN_URL_COMMIT_MESSAGE_FORMAT].

## Additional Resources

- [README.md][REF_INTERN_FILE_MD_README] – For an overview of the project and
  end-user documentation.
- [Development Guidelines][REF_INTERN_FILE_MD_DEVELOPMENT] – For detailed information
  on development, including explanations of package.json scripts and CI configuration.

## Attribution <!-- omit in toc -->

This guide is based on the [contributing.md][REF_INTERN_URL_CONTRIBUTING_GENERATOR]!

[Report a vulnerability][REF_INTERN_URL_VULNERABILITY]

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
[REF_INTERN_URL_WORKFLOW_CODEQL]: https://github.com/DJBlackEagle/ZDELETE-code-style7/actions/workflows/codeql.yml
