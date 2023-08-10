export interface IActor {
  id: number;
  name: string;
  profile_path: string;
  roles: [
    {
      character: string;
      episode_count: number;
    }
  ];
}
