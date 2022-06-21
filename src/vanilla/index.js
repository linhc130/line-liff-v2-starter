import flexCard from './liffFlex.js'

async function liffInit() {
  await liff.init({ liffId: "你-LIFF app-的-LIFF ID" });
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: window.location.href });
  }
}

function createButton(profile, body) {
  const urlParams = new URLSearchParams(window.location.search);
  const userImage = profile.pictureUrl;
  const userReply = [urlParams.get('name'), urlParams.get('phone'), urlParams.get('email'), userImage];
  const flexContent = flexCard(userReply);
  const handleClick = async () => {
    if (liff.isApiAvailable("shareTargetPicker")) {
      try {
        const result = await liff.shareTargetPicker([
          {
            "type": "flex",
            "altText": `${urlParams.get('name')} present name card from Netlify`,
            "contents": flexContent
          }
        ])

        if (result) {
          alert('Flex Message success');
        }

      } catch (error) {
        alert("Flex Message got some error");
      }
    }
  }

  const button = document.createElement("button");
  button.innerHTML = "Share Your Name Card";
  button.onclick = handleClick;

  body.appendChild(button);
}

async function main() {
  await liffInit()
  const profile = await liff.getProfile();
  const body = document.querySelector('body');
  createButton(profile, body);
}

main()
