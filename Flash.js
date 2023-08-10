let alertshow = false;

setInterval(() =>  {
    document.title =
    alertshow ? "Portfolio"
              : "Prathmesh"

              alertshow = !alertshow;
}, 1000);