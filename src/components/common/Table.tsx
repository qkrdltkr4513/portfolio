import { Table as AntdTable, Tag, ConfigProvider, TableProps } from 'antd';
import { themes } from '@styles/themes';
import { css } from '@emotion/react';

const Table = ({
  title,
  columns,
  dataSource,
  scroll,
  pagination = false,
  ...restPorps
}: TableProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: `${themes.colors.CardBackGround}`,
          colorText: `${themes.colors.White}`,
        },
      }}
    >
      <AntdTable
        title={title}
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
        scroll={scroll}
        {...restPorps}
      />
    </ConfigProvider>
  );
};

export default Table;
