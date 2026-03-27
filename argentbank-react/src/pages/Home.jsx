import Hero from '../components/Hero'
import FeatureItem from '../components/FeatureItem'
import iconChat from '../assets/img/icon-chat.png'
import iconMoney from '../assets/img/icon-money.png'
import iconSecurity from '../assets/img/icon-security.png'

function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          icon={iconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          icon={iconMoney}
          alt="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          icon={iconSecurity}
          alt="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  )
}

export default Home
