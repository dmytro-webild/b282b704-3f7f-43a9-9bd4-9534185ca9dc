"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Heart, Music } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Kawaii Ramen"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      title="Slurp into Kawaii Heaven!"
      description="The yummiest, cutest ramen shop in town with a kpop twist. Grab your bowl and dance away!"
      buttons={[
        {
          text: "View Menu",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-ramen-noodles-soup-bowl_23-2148368743.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/still-life-colorful-ramen-dish_23-2151874084.jpg",          alt: "Customer profile 1"},
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-style-ramen-bowl_23-2150250214.jpg",          alt: "Customer profile 2"},
        {
          src: "http://img.b2bpic.net/free-photo/delicious-ramen-with-chopsticks-arrangement_23-2150756211.jpg",          alt: "Customer profile 3"},
        {
          src: "http://img.b2bpic.net/free-photo/delicious-ramen-with-chopsticks-arrangement_23-2150756210.jpg",          alt: "Customer profile 4"},
        {
          src: "http://img.b2bpic.net/free-photo/person-eating-seaweed-snacks_23-2150554976.jpg",          alt: "Customer profile 5"},
      ]}
      avatarText="Join our 5k+ happy slurpers!"
      marqueeItems={[
        {
          type: "text",          text: "Fresh Broth"},
        {
          type: "text-icon",          text: "Kpop Vibes",          icon: Music,
        },
        {
          type: "text",          text: "Handmade Noodles"},
        {
          type: "text-icon",          text: "Kawaii Decor",          icon: Heart,
        },
        {
          type: "text",          text: "Delicious Mochi"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Ramen & Good Vibes"
      description="We blend authentic Japanese ramen craft with a vibrant, playful kpop spirit to create a happy dining space."
      subdescription="Every bowl is made with love, high-quality ingredients, and a dash of magic."
      icon={Heart}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-ramen-with-chopsticks_23-2150606747.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Fresh Broth",          author: "Chef Mimi",          description: "12-hour simmered chicken or tonkotsu broth.",          tags: [
            "Fresh",            "Tasty"],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-asian-food-ingredients-concept_23-2148773739.jpg"},
        {
          id: "f2",          title: "Handmade Noodles",          author: "Chef Mimi",          description: "Chewy, perfect-textured noodles every day.",          tags: [
            "Artisan",            "Fresh"],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dumplings-steamers-surrounded-with-sesame-sauce-coriander-seeds-broccoli-mushroom-black-background_23-2148123729.jpg"},
        {
          id: "f3",          title: "Kawaii Decor",          author: "Chef Mimi",          description: "The perfect backdrop for your food photos.",          tags: [
            "Aesthetic",            "Kpop"],
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-ingredients-ramen-soup_23-2148368741.jpg"},
        {
          id: "f4",          title: "Secret Spices",          author: "Chef Mimi",          description: "A unique blend of spices for a flavorful kick.",          tags: [
            "Spicy",            "Unique"],
          imageSrc: "http://img.b2bpic.net/free-photo/f-lay-ramen-soup-with-ingredients_23-2148368680.jpg"},
        {
          id: "f5",          title: "Fresh Toppings",          author: "Chef Mimi",          description: "Crisp vegetables and quality meats.",          tags: [
            "Healthy",            "Premium"],
          imageSrc: "http://img.b2bpic.net/free-photo/noodles-wooden-cutting-board-with-tomato-lime-spring-onion-chili-baby-corn_1150-27156.jpg"},
      ]}
      title="Why You'll Love Us"
      description="Fresh ingredients, kawaii vibes, and the best ramen broth in the city."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Shoyu Delight",          price: "$12.00",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chinese-hot-pot_23-2149529782.jpg"},
        {
          id: "p2",          name: "Gyoza Party",          price: "$6.00",          imageSrc: "http://img.b2bpic.net/free-photo/pork-dumplings_1339-1496.jpg"},
        {
          id: "p3",          name: "Miso Magic",          price: "$13.00",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-s-hand-holding-bowl-ramen-noodles-with-egg-onion-broccoli-red_23-2148123745.jpg"},
        {
          id: "p4",          name: "Mochi Bites",          price: "$5.00",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-little-cakes-with-cookies-cup-tea-cookies-white-backgruond-cookie-biscuit-sweet-sugar-pie-tea_140725-64890.jpg"},
        {
          id: "p5",          name: "Edamame Joy",          price: "$4.00",          imageSrc: "http://img.b2bpic.net/free-photo/black-bowl-green-noodles-with-quail-egg-sauce-served-white-tray_181624-32292.jpg"},
        {
          id: "p6",          name: "Strawberry Milk",          price: "$3.50",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-black-green-lemonade-bottles-wood-board_140725-99672.jpg"},
      ]}
      title="Signature Ramen Bowls"
      description="Pick your favorite bowl and top it up to your liking!"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          tag: "Fan",          price: "$5/mo",          period: "Monthly",          description: "Casual ramen fan perks.",          button: {
            text: "Join"},
          featuresTitle: "Included",          features: [
            "Get 10% off sides",            "Celebrate with a Birthday Treat"],
        },
        {
          id: "pro",          tag: "Idol",          price: "$15/mo",          period: "Monthly",          description: "Serious ramen lover status.",          button: {
            text: "Join"},
          featuresTitle: "Included",          features: [
            "Get 20% off everything",            "Claim a Free Mochi Monthly"],
        },
        {
          id: "super",          tag: "Legend",          price: "$30/mo",          period: "Monthly",          description: "Ultimate ramen shop experience.",          button: {
            text: "Join"},
          featuresTitle: "Included",          features: [
            "Enjoy Unlimited Sides",            "Get Priority Seating"],
        },
      ]}
      title="Membership Perks"
      description="Join our VIP club for exclusive treats and discounts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Amazing Vibes",          quote: "The cutest place ever! And the shoyu ramen is perfection.",          name: "Sarah K.",          role: "Super Fan",          imageSrc: "http://img.b2bpic.net/free-photo/people-eating-sweet-delicious-cake_23-2151534321.jpg"},
        {
          id: "t2",          title: "So Tasty",          quote: "My go-to spot for ramen and chill vibes after school.",          name: "Liam T.",          role: "Regular",          imageSrc: "http://img.b2bpic.net/free-photo/cute-3d-sushi-with-face_23-2151327506.jpg"},
        {
          id: "t3",          title: "Kawaii Heaven",          quote: "Love the kpop playlist and the mochi dessert is life-changing.",          name: "Mina J.",          role: "Ramen Lover",          imageSrc: "http://img.b2bpic.net/free-photo/asian-people-having-dinner-party_23-2149552632.jpg"},
        {
          id: "t4",          title: "Chef is Great",          quote: "You can tell the broth is made with real passion. So good!",          name: "Kenji S.",          role: "Foodie",          imageSrc: "http://img.b2bpic.net/free-photo/young-person-enjoying-street-food_23-2151525862.jpg"},
        {
          id: "t5",          title: "Perfect Spot",          quote: "The strawberry milk is a must-try with any spicy ramen bowl.",          name: "Emi P.",          role: "Visitor",          imageSrc: "http://img.b2bpic.net/free-photo/cute-3d-sushi-with-face_23-2151327563.jpg"},
      ]}
      title="Fan Reviews"
      description="What our lovely customers are saying about us!"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "Do you have vegetarian options?",          content: "Yes! We offer a delicious vegetarian miso ramen."},
        {
          id: "q2",          title: "Is the shop kpop themed?",          content: "Absolutely! We love kpop and play the best hits."},
        {
          id: "q3",          title: "Do you accept reservations?",          content: "We are walk-in only, but check our queue online."},
      ]}
      title="Common Qs"
      description="Got questions about our ramen? Here are the answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready for a ramen date? Visit us today or follow us online!"
      buttons={[
        {
          text: "Contact Us",          href: "mailto:hello@ramen.shop"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Kawaii Ramen"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Shoyu",              href: "#products"},
            {
              label: "Miso",              href: "#products"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Twitter",              href: "#"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}