import PlayerPageComponent from "@/components/PlayerPage";

interface AudioPlayerPageP {
  params: {
    musicid: string;
  };
}

export default async function AudioPlayerPage(props: AudioPlayerPageP) {
  const params = await props.params;
 
  return (
    <PlayerPageComponent musicId={params.musicid} />
  )
}