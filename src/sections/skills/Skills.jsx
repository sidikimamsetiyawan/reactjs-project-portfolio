import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML' />
            <SkillList src={checkMarkIcon} skill='CSS' />
            <SkillList src={checkMarkIcon} skill='PHP' />
            <SkillList src={checkMarkIcon} skill='JavaScript' />
            <SkillList src={checkMarkIcon} skill='Coldfusion' />
            <SkillList src={checkMarkIcon} skill='Node JS' />
            <SkillList src={checkMarkIcon} skill='Go' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='CSS' />
            <SkillList src={checkMarkIcon} skill='Boostrap' />
            <SkillList src={checkMarkIcon} skill='React JS' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Redux' />
            <SkillList src={checkMarkIcon} skill='Webpack' />
            <SkillList src={checkMarkIcon} skill='Git' />
        </div>
    </section>
  )
}

export default Skills