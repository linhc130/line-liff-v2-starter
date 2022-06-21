const colorDefault = "#666666"
const colorNetlify = "#00ad9f"

const flexCard = (userReply) => {
  console.log(userReply);
  const [name, phone, email, userImage] = userReply;

  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [flexNameContent(name, userImage), flexDetailContent(phone, email)],
      "paddingAll": "0px"
    }
  }
}

const flexNameContent = (name, userImage) => {
  return {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      flexImage(userImage),
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          flexFiller(),
          flexText("迷途小書僮", colorNetlify, "xs", "bold"),
          flexText(name, colorDefault, "xl", "bold"),
          flexBar(colorNetlify)
        ]
      }
    ],
    "spacing": "xl",
    "paddingTop": "20px",
    "paddingStart": "20px",
    "paddingEnd": "20px"
  }
}

const flexDetailContent = (phone, email) => {
  return {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          flexText("Phone", colorNetlify, "md", "bold"),
          flexText(phone, colorDefault, "md", "regular", 2),
        ]
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          flexText("Email", colorNetlify, "md", "bold"),
          flexText(email, colorDefault, "md", "regular", 2)
        ]
      }
    ],
    "paddingBottom": "20px",
    "paddingStart": "20px",
    "paddingEnd": "20px"
  }
}

const flexImage = (userImage) => ({
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "image",
      "url": userImage,
      "aspectMode": "cover",
      "size": "full"
    }
  ],
  "cornerRadius": "100px",
  "width": "72px",
  "height": "72px"
})

const flexText = (text, color, size, weight, flex = 1) => ({
  "type": "text",
  "text": text,
  "color": color,
  "size": size,
  "weight": weight,
  "flex": flex
});

const flexFiller = () => ({ "type": "filler" });

const flexBar = (color) => ({
  "type": "box",
  "layout": "vertical",
  "contents": [],
  "height": "3px",
  "backgroundColor": color
})

export default flexCard;