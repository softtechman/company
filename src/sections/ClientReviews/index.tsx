import reviewImg from "@/assets/hightlight.jpg";
import FlowingReviews from "@/components/FlowingReviews";
export default function ClientReviews() {
  return (
    <div className="relative min-h-screen">
      {/* Reviews Section */}
      <section className="relative py-20 px-6 md:px-12 bg-white">
        <div className="relative max-w-7xl mx-auto">
          {/* Background layer (absolute) - sits behind the content */}
          <div className="bg-gradient-to-b from-[#dff1fc] to-[#25a3ce] rounded-lg py-10 w-[100%] mx-auto">
            <img className="mx-auto w-20 h-20" src="https://i.postimg.cc/NMrXBzSh/review.png" />
          <div className="relative z-10 text-center pb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white display-block">
              Reviews That Highlight Our <span className="text-[#06abe0]">True Impact</span>
            </h2>
          </div>
          </div>

          {/* Heading (above background) */}

          <div className="relative z-10 -mt-8 flex ">
            {(() => {
              const reviewItems = [
                {
                  logo: "https://ext.same-assets.com/409122903/2135490664.png",
                  name: "CLEPX",
                  title: "INITIAL COIN OFFERING (ICO) PLATFORM TO RAISE CAPITAL FOR OUR OWN START-UP",
                  review: "CryptoApe listened to my project needs and created & maintained my Website, Apps in a timely reasonable manner. I would highly recommend them to anyone."
                },
                {
                  logo: "https://ext.same-assets.com/409122903/3722031134.png",
                  name: "OKEPAY",
                  title: "CRYPTO PAYMENT GATEWAY PLATFORM TO ACCEPT CRYPTO PAYMENTS",
                  review: "CryptoApe took our project, they worked tirelessly and always with great energy. My crypto payments platform came out better than I imagined - I wish I found them one year ago!"
                },
                {
                  logo: "https://ext.same-assets.com/409122903/2118341798.png",
                  name: "Moo ICO",
                  title: "INITIAL COIN OFFERING (ICO) PLATFORM TO RAISE CAPITAL FOR OUR OWN START-UP",
                  review: "Working with CryptoApe on Moo ICO gave our project the confidence to scale globally. Their solution offered flawless token distribution, real-time tracking, and advanced compliance tools."
                },
                {
                  logo: "https://ext.same-assets.com/409122903/2118341798.png",
                  name: "Moo ICO",
                  title: "INITIAL COIN OFFERING (ICO) PLATFORM TO RAISE CAPITAL FOR OUR OWN START-UP",
                  review: "Working with CryptoApe on Moo ICO gave our project the confidence to scale globally. Their solution offered flawless token distribution, real-time tracking, and advanced compliance tools."
                }
              ];
              return (
                <FlowingReviews reviews={reviewItems} />
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}
