const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Welcome to SRG SHIVAM RESIDENCY
        </h2>
        <div className="w-24 h-1 gradient-gold mx-auto mb-8 rounded-full"></div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
          Experience comfort and convenience at SRG Shivam Residency.
Located in the heart of the city, we offer a peaceful stay with clean rooms, essential amenities, and friendly service to make you feel at home.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Whether you're here with family, for a celebration, or a short getaway, our comfortable rooms and friendly service make your stay simple and enjoyable — just like home.
        </p>
      </div>
    </section>
  );
};

export default About;
