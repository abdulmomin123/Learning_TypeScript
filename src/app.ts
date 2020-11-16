interface Video {
  title: string;
  description: string;
  publishDate: Date;
}

function planVideo(title: string, description: string, publishDate: Date) {
  let videoBlueprint: Partial<Video> = {};

  videoBlueprint.title = title;
  videoBlueprint.description = description;
  videoBlueprint.publishDate = publishDate;

  return videoBlueprint;
}

const couples: Readonly<string[]> = ['momin', 'mim'];
