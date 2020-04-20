import React, { useState } from "react"
import StackedImage from "../StackedImage"
import BackButtonContainer from "./BackButtonContainer"
import BackButton from "../atoms/BackButton"
import IconButton from "../atoms/IconButton"
import { ChevronDown } from "../atoms/Icon"
import { Heading } from "../Heading"
import ArticleCarousel from "../ArticleCarousel"
import { motion } from "framer-motion"

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
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 200,
      damping: 50
    }
  },
  closed: {
    y: '-100px',
    x: '40px',
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 200,
      damping: 50
    }
  },
}

const titleVariants = {
  closed: {
    opacity: 1,
    display: 'block',
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 200,
      damping: 500
    }
  },
  open: {
    opacity: 0,
    display: 'none',
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 200,
      damping: 50
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
      initial="closed"
      animate={articlesCarouselVisible ? "open" : "closed"}
      onHoverStart={() => setArticlesCarouselVisible(true)}
      onHoverEnd={() => setArticlesCarouselVisible(false)}
    >
      
      <BackButtonContainer
        className={className}
      >
        
          <div className="grid w-full items-start grid-flow-col gap-4 md:gap-6 lg:gap-10">
            <motion.div>
              <BackButton to={backButtonTo} customIcon={<div className="w-8 py-1">
                <StackedImage image={image} size="small"/>
              </div>}>
                <div className>{buttonText}</div>
              
              </BackButton>
            </motion.div>
            <motion.div
              className="md:w-lg xl:w-xxl"
              style={{justifySelf: 'stretch', alignSelf: 'center'}}
            >
              <motion.div className={`${articlesCarouselVisible ? 'block': 'hidden'}`} variants={carouselVariants}>
                {articles.length && <ArticleCarousel articles={articles} />}
              </motion.div>
              <motion.div variants={titleVariants} style={{alignSelf: 'center'}} className="hidden limit-lines-2 md:block text-white">
                <Heading type="h4">{titleText}</Heading>
              </motion.div>
            
            
            </motion.div>
            
            <div
              style={{ justifySelf: "end" }}
            >
              <div className="h-2"></div>
              <IconButton className="text-right" icon={<motion.div variants={rightIconVariants}><ChevronDown className="text-gray-50"/>            </motion.div>}/>
            </div>
          </div>
        {/*</motion.div>*/}
      
      </BackButtonContainer>
    </motion.div>
  )
}

export default BackButtonContainerForArticle;