import ClientsImg from "../assets/clients.png";
const Clients = () => {
  return (
    <section className="bg-clients-banner flex items-center">
      <div className="pl-8 text-[#1C280B]">
        <h3 className="uppercase text-[22px] font-medium mb-[32px] ">
          a snapshot of previous clients
        </h3>
        <p className="leading-[22px] font-base tracking-[0.32px] mb-4">
          At Yinkus Kitchen, we&apos;ve had the pleasure of curating
          unforgettable culinary experiences for a diverse array of clients.
          Each event represents a unique chapter in our culinary story. Our past
          clients have entrusted us with their special moments, ranging from
          weddings to corporate events and milestone celebrations that have left
          lasting impressions.
        </p>

        <p className="leading-[22px] font-base tracking-[0.32px] mb-4">
          While we respect the confidentiality of these events, we invite you to
          get a glimpse of the diverse clients we&apos;ve had the pleasure of
          catering. These stories reflect our dedication to creating exceptional
          experiences.
        </p>

        <p className="leading-[22px] font-base tracking-[0.32px] mb-4">
          Thank you to our valued clients for allowing us to be part of your
          cherished events.
        </p>
      </div>
      <img src={ClientsImg} alt="clients" />
    </section>
  );
};

export default Clients;
