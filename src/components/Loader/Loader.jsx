import logoIcon from "../../assets/logo-icon.png";

const Loader = () => {
   
    return (
        <div style={styles.loading}>
            <img style={styles.logoIcon} src={logoIcon} alt="" />
        </div>
    );
};

export default Loader;

const styles = {
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  logoIcon: {
    animationName: 'spin',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transform: 'translateZ(0)',
    transformOrigin: 'center',
  }
};
   