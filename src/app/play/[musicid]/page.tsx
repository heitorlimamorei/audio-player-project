import PlayerPageComponent from "@/components/PlayerPage";

interface AudioPlayerPageProps {
  params: Promise<any>
}

export default async function AudioPlayerPage(props: AudioPlayerPageProps) {
  const params = await props.params;
 
  return (
    <PlayerPageComponent musicId={params.musicid} />
  )
}