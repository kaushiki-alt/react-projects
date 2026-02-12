import { GET_USER } from "@/queries";
import type { UserData } from "@/types";
import { useQuery } from "@apollo/client/react";
import ForkedRepos from "../charts/ForkedRepos";
import StarredRepos from "../charts/StarredRepos";
import UsedLangs from "../charts/UsedLangs";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import Loading from "./Loading";

type UserProfileProps = {
  user: string;
}

const UserProfile = ({ user }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_USER, { variables: { login: user }, })
  console.log(data);


  if (loading) return <Loading/>
  if (error) return <h2 className='text-xl'>{error.message}</h2>;
  if (!data) return <h2 className='text-xl'>User Not Found.</h2>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <UserCard avatarUrl = {avatarUrl} name = {name} bio={bio} url= {url} />
      <StatsContainer totalRepos = {repositories.totalCount} followers = {followers.totalCount} followings ={following.totalCount} gists={gists.totalCount} />      
      {
        repositories.totalCount > 0 && (<div className="grid md:grid-cols-2 gap-4">
          <UsedLangs repositories  = {repositories.nodes} />
          <StarredRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
        )
      }

    </div>
  )
}

export default UserProfile;
