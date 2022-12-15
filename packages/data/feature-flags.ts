import { aaveMembers } from './aave-members';
import { sphrexMembers } from './sphrex-members';

export const featureFlags = [
  {
    key: 'trending-widget',
    name: 'Trending widget',
    enabledFor: [...sphrexMembers]
  },
  {
    key: 'access-settings',
    name: 'Access settings',
    enabledFor: [...sphrexMembers, ...aaveMembers]
  }
];
