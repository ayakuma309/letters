const Home = async () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center p-4 sm:p-24'>
      <div className='text-gray-600'>
        <div className='flex flex-col  items-center text-center justify-center'>
          <h1 className='sm:text-7xl text-5xl mb-4 font-medium text-red-600'>
            Letters Tube
          </h1>
          <p className='leading-relaxed'>
            未経験の方がどのように勉強すればいいのかを解決する
            <br />
            情報収集サービスです
          </p>
        </div>
      </div>
      <div className='hero-overlay bg-opacity-10 sm:bg-opacity-30'>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-lg lg:max-w-xl'>
            <div className='container mx-auto'>
              <div className='flex md:items-center md:flex-row flex-col mt-12 md:mb-64 mb-32'>
                <div className='md:flex-1'>
                  <h1 className='text-3xl my-2'>簡単に情報収集できる</h1>
                  <p className='text-gray-500 md:mb-0 '>
                    何からはじめたらいいか悩んだことはありませんか？
                    <br />
                    安心してください。情報はここにあります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
