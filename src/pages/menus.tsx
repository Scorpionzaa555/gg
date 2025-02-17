import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import coffee from "../assets/images/coffee.jpg";
import useSWR from "swr";
import { Menu } from "../lib/models";
import Loading from "../components/loading";
import { Alert, Button } from "@mantine/core";
import { IconAlertTriangleFilled, IconPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MenusPage() {
  const { data: menus, error } = useSWR<Menu[]>("/menus");
  const navigate = useNavigate();

  const handleOrder = (menuName: String, menuPrice: Number) => {
    navigate('/orders/create', { state: { name: menuName, price: menuPrice } });
  };

  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{ backgroundImage: `url(${cafeBackgroundImage})` }}
      >
        <h1 className="text-5xl mb-2">เมนู</h1>
        <h2>เมนูทั้งหมดในร้าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <div className="flex justify-between">
          <h1>รายการเมนู</h1>
          <Button
            component={Link}
            leftSection={<IconPlus />}
            to="/menus/create"
            size="xs"
            variant="primary"
            className="flex items-center space-x-2"
          >
            เพิ่มเมนู
          </Button>
        </div>

        {!menus && !error && <Loading />}
        {error && (
          <Alert
            color="red"
            title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
            icon={<IconAlertTriangleFilled />}
          >
            {error.message}
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menus?.map((menu) => (
            <div className="border border-solid border-neutral-200" key={menu.id}>
              <img
                src={coffee}
                alt={menu.name}
                className="w-full object-cover aspect-[3/4]"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-2">{menu.name}</h2>
                <p className="text-s text-neutral-500">ราคา {menu.price} บาท</p>
                
              </div>

              <div className="flex justify-end px-4 pb-2">
                <Button component={Link} to={`/menus/${menu.id}`} size="xs" variant="default">
                  ดูรายละเอียด
                </Button>

                <Button
                  leftSection={<IconPlus />}
                  onClick={() => handleOrder(menu.name, menu.price)}
                  size="xs"
                  variant="primary"
                  className="flex items-center space-x-2"
                >
                  สั่งกาแฟ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}