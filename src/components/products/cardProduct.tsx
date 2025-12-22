import ProductBadge from './productBadge';

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  price_before_discount: number;
  color: string;
  colors: string[];
  position: string;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  price_before_discount,
  color,
  colors,
  position
}: Props) {

  const classList = "card-body " + "text-" + position;

  return (
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">
        <a href="#">
          <div className="height-350">
            <img className="w-100 h-100 p-4 rounded-top" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
          </div>
          <div className={classList}>
            {(color) && 
              <h6 className="text-md mb-1 text-body">{color}</h6>
            }
            {(title) && 
              <h4 className="font-weight-bold">
                {title}
              </h4>
            }

            {(description) && 
              <p className="text-body">{description}</p>
            }
           
            {(colors) &&
              <ProductBadge colors={colors} />
            }
            
            {(price) && 
              <h4 className="mb-0 text-lg mt-1 mb-3">
                ₹{price.toLocaleString()}
              </h4>
            }
            {(price_before_discount) && 
              <h4 className="mb-0 text-lg mt-1 mb-3">
                <span className="text-muted text-decoration-line-through">₹{price_before_discount.toLocaleString()}</span>
              </h4>
            }

            {!(description || colors || color) &&
              <a href="#" className="font-weight-normal text-body text-sm">Shop Now</a>
            }

              <div className="d-flex justify-content-center mb-3">
                <a
                  className="btn btn-success"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    `https://wa.me/918209625303?text=${encodeURIComponent(
                      `Hi, I want to buy: ${title}\n${typeof window !== 'undefined' ? window.location.origin + '/cushion' : 'https://urbanpanchhi.com/cushion'}`
                    )}`
                  }
                >
                  Buy Now
                </a>
              </div>
          </div>
        </a>
      </div>
    </>
  );
};
