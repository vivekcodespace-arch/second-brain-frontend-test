function getYouTubeVideoId(url:string) {
  try {
    const parsedUrl = new URL(url);

    // youtu.be/<id>
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    // youtube.com/watch?v=<id>
    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    // youtube.com/shorts/<id>
    if (parsedUrl.pathname.startsWith("/shorts/")) {
      return parsedUrl.pathname.split("/shorts/")[1];
    }

    return null;
  } catch {
    return null;
  }
}

function getTwitterLink(url: string){
  try{
    const parsedUrl = new URL(url)
    const parts = parsedUrl.pathname.split('/');
    return parts[parts.length - 1];

  }catch{
    return null;
  }
}

export function getEmbedurl(link: string, type:string){
    let code;
    if(type === "youtube"){
      code = getYouTubeVideoId(link)
      code = code ? `https://www.youtube.com/embed/${code}` : null;
    }
    if(type ==="twitter"){
      code = getTwitterLink(link)
      code = code ? `https://twitter.com/username/status/${code}` : null;
    }
    return code
}