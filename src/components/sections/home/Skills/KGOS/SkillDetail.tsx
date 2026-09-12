import styles from "./SkillDetail.module.css";

type SkillDetailProps = {
  skill: {
    readonly name: string;
    readonly description: string;
    readonly jobs: ReadonlyArray<{
      readonly name: string;
      readonly description: string;
    }>;
    readonly techItems: readonly string[];
  };
};

function SkillDetail({ skill }: SkillDetailProps) {
  return (
    <div className={styles.detail}>
      <div className={styles.description}>
        <h3 className={styles.skillName}>{skill.name}</h3>

        <p>{skill.description}</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>JOB OPTIONS</h4>

        <div className={styles.jobs}>
          {skill.jobs.map((job) => (
            <div key={job.name} className={styles.job}>
              <strong className={styles.jobName}>
                {job.name}
              </strong>

              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>TECH ITEMS</h4>

        <div className={styles.techItems}>
          {skill.techItems.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;