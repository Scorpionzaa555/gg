import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import cafeBackgroundImage2 from "../assets/images/bg-cafe-3.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
// import coffeeImage from "../assets/images/coffee-1.jpg";
import mashleImage from "../assets/images/mashle.webp";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things และนายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* TODO: ชื่อของตนเอง, รหัสประจำตัวนักศึกษา และแนะนำคาเฟ่นี้ต่ออีกสักหน่อย + ใส่รูปของตนเอง (ไม่จำเป็นหากไม่สะดวกใจใส่รูป) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
              <img src={mashleImage} alt="Thanawan Chaemsathian" className="h-full w-full object-cover"/>
          </div>

          <p className="text-right mt-8">
            ปัจจุบันค่าเฟ่ และห้องสมุดของเรา อยู่ในช่วงการดูแลของ .... นายธนาวัลย์ แช่มเสถียร รหัสประจำตัวนักศึกษา 65070099
            ซึ่งมีบริการ... ขายกาแฟและให้อ่านหนังสือภายในร้านได้ โดยสามารถเข้าไปดูรายการเมนู และหนังสือที่หน้าเว็บได้เลย
          </p>
        </div>
      </section>

      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage2})`,
        }}
      >
        <h1 className="text-5xl mb-2">อิรัชชัยมาเสะ!!</h1>
        <h2>65070099</h2>
      </section>

      {/* <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section> */}
    </Layout>
  );
}
