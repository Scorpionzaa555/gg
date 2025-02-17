import { Alert, Button, Container, Divider } from "@mantine/core";
import coffee from "../assets/images/coffee.jpg";
import Layout from "../components/layout";
import { Link, useParams } from "react-router-dom";
import { Menu } from "../lib/models";
import useSWR from "swr";
import Loading from "../components/loading";
import { IconAlertTriangleFilled, IconEdit } from "@tabler/icons-react";

export default function MenuByIdPage() {
  const { menuId } = useParams();

  const { data: menus, isLoading, error } = useSWR<Menu>(`/menus/${menuId}`);

  return (
    <>
      <Layout>
        <Container className="mt-4">
          {/* You can use isLoading instead of !book */}
          {isLoading && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          {!!menus && (
            <>
              <h1>{menus.name}</h1>
              <p className="italic text-neutral-500 mb-4"></p>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <img
                  src={coffee}
                  alt={menus.name}
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="col-span-2 px-4 space-y-2 py-4">
                  <h3>รายละเอียดเมนู</h3>
                  <p className="indent-4">
                    {menus.detail}
        
                  </p>
                  <h3>ราคา</h3>
                  <p className="indent-4">
                    {menus.price}
        
                  </p>
                </div>
              </div>

              <Divider className="mt-4" />

              <Button
                color="blue"
                size="xs"
                component={Link}
                to={`/menus/${menus.id}/edit`}
                className="mt-4"
                leftSection={<IconEdit />}
              >
                แก้ไขข้อมูลเมนู
              </Button>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
