import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";
import cn from "classnames";
import {
  Button,
  Card,
  Divider,
  Rating,
  Review,
  ReviewForm,
  Tag,
} from "components";
import { declOfNum, priceRu } from "helpers/helpers";
import Link from "next/link";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);
      const variants = {
        visible: {
          height: "auto",
          opacity: 1,
          overflow: "hidden",
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          height: 0,
          opacity: 0,
          overflow: "hidden",
          transition: {
            duration: 0.5,
          },
        },
      };
      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        reviewRef.current?.focus();
      };
      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                title={product.title}
                width={70}
                height={70}
                quality={100}
                layout="intrinsic"
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {priceRu(product.price)}{" "}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green" size="small">
                  {priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceRu(product.credit)}
              <span className={styles.month}>/ мес</span>
            </div>
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.categories}>
              {product.categories.map((c) => (
                <Tag
                  key={c}
                  className={styles.category}
                  color="ghost"
                  size="small"
                >
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.ratingTitle}>
              <a href="#ref" onClick={() => scrollToReview()}>
                {product.reviewCount}{" "}
                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Link href={product.link}>
                <a target="_blank">
                  <Button appearance="primary">Узнать подробнее</Button>
                </a>
              </Link>

              <Button
                appearance="ghost"
                arrow={isReviewOpened ? "down" : "right"}
                className={styles.reviewButton}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={isReviewOpened ? "visible" : "hidden"}
          >
            <Card
              color="blue"
              className={styles.reviews}
              ref={reviewRef}
              tabIndex={isReviewOpened ? 0 : -1}
            >
              {product.reviews.map((r) => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
