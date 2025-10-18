import FlowingReviews from "@/components/FlowingReviews";
//images
import clepxImg from "@/assets/client/clepx.png";
import micoImg from "@/assets/client/mico.png";
import oplexxImg from "@/assets/client/oplex.png";

export default function ClientReviews() {
  return (
    <div className="relative">
      {/* Reviews Section */}
      <section className="relative px-6 md:px-12 bg-white">
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
                  logo: clepxImg,
                  name: "CLEPX",
                  title: "INITIAL COIN OFFERING (ICO) PLATFORM TO RAISE CAPITAL FOR OUR OWN START-UP",
                  review: "CryptoApe listened to my project needs and created & maintained my Website, Apps in a timely reasonable manner. I would highly recommend them to anyone."
                },
                {
                  logo: oplexxImg,
                  name: "OKEPAY",
                  title: "CRYPTO PAYMENT GATEWAY PLATFORM TO ACCEPT CRYPTO PAYMENTS",
                  review: "CryptoApe took our project, they worked tirelessly and always with great energy. My crypto payments platform came out better than I imagined - I wish I found them one year ago!"
                },
                {
                  logo: micoImg,
                  name: "Moo ICO",
                  title: "INITIAL COIN OFFERING (ICO) PLATFORM TO RAISE CAPITAL FOR OUR OWN START-UP",
                  review: "Working with CryptoApe on Moo ICO gave our project the confidence to scale globally. Their solution offered flawless token distribution, real-time tracking, and advanced compliance tools."
                },
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
