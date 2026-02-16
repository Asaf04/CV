import styles from './OpportunityCard.module.css';
import opportunityData from '../data/opportunity.json';
import { generateMailtoLink } from '../utils/mailto';

interface Badge {
  label: string;
  icon: string;
}

interface OpportunityCardProps {
  title?: string;
  description?: string;
  icon?: string;
  badges?: Badge[];
  ctaLabel?: string;
  ctaEmail: string;
  ctaSubject?: string;
}

export default function OpportunityCard({
  title = opportunityData.title,
  description = opportunityData.description,
  icon = opportunityData.icon,
  badges = opportunityData.badges,
  ctaLabel = opportunityData.cta.label,
  ctaEmail,
  ctaSubject = opportunityData.cta.subject,
}: OpportunityCardProps) {
  const mailtoLink = generateMailtoLink(ctaEmail, ctaSubject);

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.decorativeTop} />
        <div className={styles.decorativeBottom} />

        <div className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.textContent}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>

              <div className={styles.badges}>
                {badges.map((badge, index) => (
                  <span key={index} className={styles.badge}>
                    {badge.icon} {badge.label}
                  </span>
                ))}
              </div>

              <a href={mailtoLink} className={styles.cta}>
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
