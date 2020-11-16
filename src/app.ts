interface Video {
  title: string;
  description: string;
  publishDate: Date;
}

function planVideo(
  title: string,
  description: string,
  publishDate: Date
): Video {
  let videoBlueprint: Partial<Video> = {};

  videoBlueprint.title = title;
  videoBlueprint.description = description;
  videoBlueprint.publishDate = publishDate;

  return videoBlueprint as Video;
}
