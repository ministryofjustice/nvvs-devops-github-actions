[![repo standards badge](https://img.shields.io/badge/dynamic/json?color=blue&style=flat&logo=github&labelColor=32393F&label=MoJ%20Compliant&query=%24.result&url=https%3A%2F%2Foperations-engineering-reports.cloud-platform.service.justice.gov.uk%2Fapi%2Fv1%2Fcompliant_public_repositories%2Fcloud-operations-github-actions)](https://operations-engineering-reports.cloud-platform.service.justice.gov.uk/public-github-repositories.html#cloud-operations-github-actions "Link to report")

# NVVS DevOps GitHub Actions

This repository was created as a central location to hold, manage and maintain our GitHub actions.

- [Label Issues](#label-issues)
- [Label Pull Request](#label-pull-request)
- [Issue to Jira](#issue-to-jira)
- [Issue to Project](#issue-to-project)

## Label Issues

Automatically adds or removes labels from issues.

Marketplace Link: https://github.com/marketplace/actions/simple-issue-labeler

Copy the `label-issues.yml` to your repository (`.github/workflows/label-issues.yml`) then edit the 'add-labels:' line to include any labels you want to automatically add to the GitHub issue for the repository.

```
name: Label issues
on:
  issues:
    types:
      - reopened
      - opened
jobs:
  label_issues:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Label issues
        uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
        with:
          add-labels: "infrastructure-monitoring, test-label"
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```

Once an issue is then opened or reopened the issue will then get automatically labelled.

## Label Pull Request

Automatically label new pull requests based on the paths of files being changed.

Marketplace Link: https://github.com/marketplace/actions/labeler

To automatically label pull requests add the `label-pull-request.yml` file to your GitHub repository (`./github/workflows/label-pull-request.yml`) and the `labeler.yml` file (`.github/labeler.yml`).

Edit the `.github/labeler.yml` file with a list of labels and file paths to automatically label. ( \*\* - All files)

Example:

```
github-actions:
  - '**'

documentation:
  - "diagrams/**"
  - "documentation/**"
  - "README.md"

```

## Issue To Jira

Automatically add issues to Jira Board on close.

Add the `issue-to-jira-trigger.yml` to the repository (`./github/workflows/issue-to-jira-trigger.yml`), this file calls the `ministryofjustice/cloud-operations-github-actions/.github/workflows/issue-to-jira.yml@main` action when an issue is closed. This action then creates a ticket on our Jira board and transitions it to 'Done'. (a comment is also added the GitHub issue containing a link to the Jira ticket.)

## Issue To Project

Use this action to automatically add the current issue or pull request to a GitHub project.

Marketplace Link: https://github.com/marketplace/actions/add-to-github-projects

Add the `issue-to-project.yml` to the repository (`./github/workflows/issue-to-project.yml`), this file call the `ministryofjustice/cloud-operations-github-actions/.github/workflows/issue-to-project.yml@main` action when an issue is opened. This action automatically adds the issue the GitHub project specified in the `project-url`.
