import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
import iconChat from '../../assets/img/icon-chat.png'
import iconMoney from '../../assets/img/icon-money.png'
import iconSecurity from '../../assets/img/icon-security.png'

const features = [
  {
    id: 1,
    icon: iconChat,
    alt: 'Chat Icon',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    id: 2,
    icon: iconMoney,
    alt: 'Money Icon',
    title: 'More savings means higher rates',
    description:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    id: 3,
    icon: iconSecurity,
    alt: 'Security Icon',
    title: 'Security you can trust',
    description:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            icon={feature.icon}
            alt={feature.alt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
