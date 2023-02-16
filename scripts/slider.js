let delay = setTimeout(() => {}, 100);
const sleep = ms => new Promise(r => setTimeout(r, ms));

$(".sequence-item").on("mouseenter", function() {
  let that = $(this)
  console.log($(that).offset())
  let height = $(this).height()
  let width = $(this).width()

  delay = setTimeout(async function() {
    $(".subject").find("img").attr("src", that.find("img").attr("src"))
    $(".subject__image").children("img").css({
      "height": (height * 1.5),
      "width": "400px",
    });

    await sleep(600)
    $(".subject")
      .addClass("subject--active")
      .css({
        "width": "400px",
        "left": that.offset().left - ((400 - width) / 2),
        "top": that.offset().top - (((height * 1.79) - height) / 2),
        "--scale": "1",
        "--translateY": -`${height * 1.5}px`,
        "box-shadow": "0 3px 10px rgba(0,0,0, .75)",
      });

    $(".subject-panel")
      .css({
        "opacity": "1",
      });

  }, 400);
}).on("mouseleave", async function() {
  clearTimeout(delay)
})

$(".subject").on("mouseleave", async function() {
  await sleep(50)
  $(".subject")
    .css({
      "--scale": ".667",
      "box-shadow": "none",
      "--translateY": "0",
    })
  await sleep(50)
  $(".subject-panel")
    .css({
      opacity: "0",
    });
  await sleep(100)
  $(".subject")
    .removeClass("subject--active")
    .css({
      "left": 0,
      "top": 0,
    });
})