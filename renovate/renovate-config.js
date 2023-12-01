module.exports = {
    branchPrefix: 'renovate/',
    dryRun: false,
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: true,
    platform: 'github',
    includeForks: true,
    repositories: [
        'ministryofjustice/network-access-control-infrastructure',
        'ministryofjustice/nvvs-devops-github-actions',
        'ministryofjustice/staff-device-dns-dhcp-infrastructure',
        'ministryofjustice/staff-device-shared-services-infrastructure',
        'ministryofjustice/staff-infrastructure-network-services',
        'ministryofjustice/staff-technology-services-github-teams',
    ],
    packageRules: [
      {
        matchDatasources: ["terraform-module","terraform-provider"],
        dependencyDashboardApproval: false,
        stabilityDays: 0,
      },
        {
            "ignorePaths": [".github/workflows/label-issues.yml"]
        }
    ],
  };
