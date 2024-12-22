const MapLocation = () => {
  return (
    <div className="py-5 md:my-8">
      <div className="main_container">
      <div className="filter_map rounded-md  w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29428.751582092744!2d113.90829638066509!3d22.780445644862432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20Floor%2C%20Building%207%2CHouhai%20Industrial%20Park%2C%20Loucun%20Community%2C%20Guangming%20New%20District%2C%20Shenzhen%2C%20China%20518106!5e0!3m2!1sen!2sus!4v1684462889188!5m2!1sen!2sus"
              width="100%"
              height={350}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default MapLocation;
