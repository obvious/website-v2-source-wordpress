import React, { useState } from "react"
import BackButtonContainer from "./BackButtonContainer"
import BackButton from "../atoms/BackButton"
import IconButton from "../atoms/IconButton"
import { ChevronDown } from "../atoms/Icon"
import { Heading } from "../Heading"
import ArticleCarousel from "../ArticleCarousel"
import { motion, AnimatePresence } from "framer-motion"
import '../../styles/back-button-for-articles.css'

const rightIconVariants = {
  open: {
    rotate: 180,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 500
    }
  },
  closed: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50
    }
  },
}

const containerVariants = {
  open: {
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 500
    }
  },
  closed: {
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50
    }
  },
}

const carouselVariants = {
  open: {
    display: 'block',
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      // stiffness: 200,
      // damping: 500
    }
  },
  closed: {
    display: 'none',
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      // stiffness: 200,
      // damping: 500
    }
  },
}

const titleVariants = {
  closed: {
    opacity: 1,
    display: 'inherit',
    transition: {
      type: "spring",
      duration: 0.4,
      // stiffness: 200,
      // damping: 500
    }
  },
  open: {
    opacity: 0,
    display: 'none',
    transition: {
      type: "spring",
      duration: 0.4,
      // stiffness: 200,
      // damping: 50
    }
  },
}


const BackButtonContainerForArticle = (
  {
    image,
    className,
    titleText,
    backButtonTo,
    buttonText,
    articles = []
  }) => {
  const [articlesCarouselVisible, setArticlesCarouselVisible] = useState(false)
  return (
    <motion.div
      animate={articlesCarouselVisible ? "open" : "closed"}
      onHoverStart={() => setArticlesCarouselVisible(true)}
      onHoverEnd={() => setTimeout( () => setArticlesCarouselVisible(false), 100 )}
    >
      
      <BackButtonContainer
        className={className}
      >
        
        <motion.div className="ob-back-button-for-articles-container grid w-full items-start grid-flow-auto col-gap-4 md:gap-10 lg:gap-10">
          <div className="ob-back-button">
            <BackButton to={backButtonTo}
                        stackedImage={image}
            >
              <div>{buttonText}</div>
            </BackButton>
          </div>
          <div
            style={{justifySelf: 'center', alignSelf: 'center'}}
            className="w-full md:w-lg xl:w-xxl ob-carousel-and-title"
          >
            <motion.div className="ob-carousel" variants={carouselVariants}>
              {articles.length && <ArticleCarousel articles={articles} />}
            </motion.div>
            <motion.div variants={titleVariants} style={{alignSelf: 'center'}} className="ob-title md:block text-white">
              <Heading className="limit-lines-2" type="h4">{titleText}</Heading>
            </motion.div>
          
          
          </div>
          
          <div
            className="ob-icon"
            style={{ justifySelf: "end" }}
          >
            <div className="h-2"/>
            <IconButton className="text-right" icon={<motion.div variants={rightIconVariants}><ChevronDown className="text-gray-50"/>            </motion.div>}/>
          </div>
        </motion.div>
        {/*</motion.div>*/}
      
      </BackButtonContainer>
    </motion.div>
  )
}

export default BackButtonContainerForArticle;