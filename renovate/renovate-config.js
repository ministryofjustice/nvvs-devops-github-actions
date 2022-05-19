module.exports = {
    branchPrefix: 'renovate/',
    dryRun: false,
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: true,
    platform: 'github',
    includeForks: true,
    repositories: [
      'ministryofjustice/cloud-operations-github-actions',
      'ministryofjustice/staff-infrastructure-monitoring-config',
    ],
    packageRules: [
      {
        matchDatasources: ["terraform-module","terraform-provider"],
        dependencyDashboardApproval: false,
        stabilityDays: 0,
      },
    ],
  };
