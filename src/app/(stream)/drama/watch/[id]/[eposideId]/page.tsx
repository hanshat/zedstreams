import VideoPlayer from "@/components/stream-containers/anime-section/anime-video-player/video-player";
import DramaVideoPlayer from "@/components/stream-containers/drama-section/drama-video-player/drama-video-player";
import { Card } from "@/components/ui/card";
import { fetchDramaInfoById } from "@/data-access";
import { decodeParam } from "@/lib/url-param-encoder";
import React from "react";

export default async function page({
  params,
}: {
  params: { id: string; eposideId: string };
}) {
  const id = decodeParam(params.id);
  const eposideId = params.eposideId;
  return (
    <div>
      <div className="">
          <DramaVideoPlayer id={id} eposideId={eposideId} />
      </div>
      <div className="mt-2">{/* <VideoMetadata  data={animeData} /> */}</div>
    </div>
  );
}
