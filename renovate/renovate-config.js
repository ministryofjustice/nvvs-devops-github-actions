module.exports = {
    branchPrefix: 'renovate/',
    dryRun: false,
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: true,
    platform: 'github',
    includeForks: true,
    repositories: [
      'ministryofjustice/nvvs-devops-github-actions',
      'ministryofjustice/staff-infrastructure-monitoring',
      'ministryofjustice/staff-infrastructure-monitoring-config',
      'ministryofjustice/staff-device-dns-dhcp-infrastructure',
      'ministryofjustice/staff-device-shared-services-infrastructure',
      'ministryofjustice/staff-technology-services-github-teams',
      'ministryofjustice/staff-infrastructure-network-services',
    ],
    packageRules: [
      {
        matchDatasources: ["terraform-module","terraform-provider"],
        dependencyDashboardApproval: false,
        stabilityDays: 0,
      },
    ],
  };
