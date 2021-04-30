
import {
    Tabs,
    Breadcrumb,
    Input,
    Button,
    Divider,
    DatePicker,
    Select
} from 'antd';

import "../css/buyTicketComponent.css"

const { TabPane } = Tabs;
const { Option } = Select;



const listFilm = [
    {
      title: 'GODZILLA vs KONG',
      subTitle: 'GODZILLA ĐẠI CHIẾN KONG',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim6.jpg?alt=media&token=21c40a0b-c0fb-4478-8a54-60d73ecf0e85',
    },
    {
      title: 'THE UNHOLY',
      subTitle: 'Ấn quỷ',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
    },
    {
      title: 'Bố già',
      subTitle: 'Bố già',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim3.jpg?alt=media&token=df0a6f6d-20b5-4be5-bccb-885337e25b3c',
    },
    {
      title: 'Song song',
      subTitle: 'Song song',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
    },
  ];
  
  const listReview = [
    {
      title: 'Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?',
      movieName: 'Mortal Kombat',
      content:
        'tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
    },
    {
      title: 'Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?',
      movieName: 'Mortal Kombat',
      content:
        'tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
    },
    {
      title: 'Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?',
      movieName: 'Mortal Kombat',
      content:
        'tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
    },
    {
      title: 'Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?',
      movieName: 'Mortal Kombat',
      content:
        'tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
    },
  ];
  
  const listEvent = [
    {
      name: 'Happy Day Happy Popcorn',
      description:
        'Vào thứ 3 hàng tuần – Happy Day, ngoài ưu đãi giá vé CHỈ TỪ 45K, khi các Stars mua 01 bắp sẽ được TẶNG NGAY 01 NƯỚC.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/km1.jpg?alt=media&token=212ba0cf-d92c-4300-a39d-f46d6faa7f80',
      url: '/khuyen-mai/happy-day-happy-popcorn',
    },
    {
      name: 'Happy Day Happy Popcorn',
      description:
        'Vào thứ 3 hàng tuần – Happy Day, ngoài ưu đãi giá vé CHỈ TỪ 45K, khi các Stars mua 01 bắp sẽ được TẶNG NGAY 01 NƯỚC.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/km1.jpg?alt=media&token=212ba0cf-d92c-4300-a39d-f46d6faa7f80',
      url: '/khuyen-mai/happy-day-happy-popcorn',
    },
    {
      name: 'Happy Day Happy Popcorn',
      description:
        'Vào thứ 3 hàng tuần – Happy Day, ngoài ưu đãi giá vé CHỈ TỪ 45K, khi các Stars mua 01 bắp sẽ được TẶNG NGAY 01 NƯỚC.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/km1.jpg?alt=media&token=212ba0cf-d92c-4300-a39d-f46d6faa7f80',
      url: '/khuyen-mai/happy-day-happy-popcorn',
    },
    {
      name: 'Happy Day Happy Popcorn',
      description:
        'Vào thứ 3 hàng tuần – Happy Day, ngoài ưu đãi giá vé CHỈ TỪ 45K, khi các Stars mua 01 bắp sẽ được TẶNG NGAY 01 NƯỚC.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/km1.jpg?alt=media&token=212ba0cf-d92c-4300-a39d-f46d6faa7f80',
      url: '/khuyen-mai/happy-day-happy-popcorn',
    },
  ];
  
  const listCity = [
    {
      key: 'daNang',
      value: 'Đà Nẵng',
    },
    {
      key: 'haNoi',
      value: 'Hà Nội',
    },
  ];
  
  
  const listTheater = [
    {
      key: 'hoaKhanh',
      value: 'Hòa Khánh',
    },
    {
      key: 'hoaKhanh',
      value: 'Hòa Khánh',
    },
  ];
  

function callback(key) {
    console.log(key);
}

const onChange = (value) => {
    console.log(`selected ${value}`);
};

const onBlur = () => {
    console.log('blur');
};

const onFocus = () => {
    console.log('focus');
};

const onSearch = (val) => {
    console.log('search:', val);
};


const BuyTicket = () => {
    return (

        <div className="box-buy-ticket">
            <div className="label-tab">Mua vé nhanh</div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Theo phim" key="1">
                    <Select
                        showSearch
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn phim</Option>
                        {listFilm.map((data, index) => (
                            <Option value={data.key} key={`phim-${index}`}>
                                {data.title}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn rạp</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn ngày</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>


                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn suất</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                </TabPane>
                <TabPane tab="Theo ngày" key="2">
                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn phim</Option>
                        {listFilm.map((data, index) => (
                            <Option value={data.key} key={`phim-${index}`}>
                                {data.title}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn rạp</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>


                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn ngày</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn suất</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>
                </TabPane>
                <TabPane tab="Theo rạp" key="3">
                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn phim</Option>
                        {listFilm.map((data, index) => (
                            <Option value={data.key} key={`phim-${index}`}>
                                {data.title}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn rạp</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn ngày</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn suất</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>
                </TabPane>
            </Tabs>
            <a href="/bookTicket" className="btn fl-right">
                MUA VÉ
          </a>
        </div>
    )
}

export default BuyTicket;