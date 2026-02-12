import StatsCard from "./StatsCard"

type StatsContainerProps = {
    totalRepos : number;
    followers : number;
    followings : number;
    gists : number;
}
const StatsContainer = ({totalRepos, followers, followings, gists} : StatsContainerProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8' >
      <StatsCard title = "Total Repos" count = {totalRepos}/>
      <StatsCard title = "Followers" count = {followers}/>
      <StatsCard title = "Followings" count = {followings}/>
      <StatsCard title = "Gists" count = {gists}/>
    </div>
  )
}

export default StatsContainer
