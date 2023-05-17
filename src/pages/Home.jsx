
import Button from '../component/Button';
import MotionIcon from '../component/MotionIcon';




const Home = () => {

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className='container'>

      <h2 className='my-10'>
        透過
        <br />
        AI 工具王的
        <br />
        強大模型
        <br />
        讓您的業務更聰明
      </h2>
      <Button className="mb-[100px]" text="開始使用" onClick={handleClick} />
      <MotionIcon />
    </div>
  );
}

export default Home;